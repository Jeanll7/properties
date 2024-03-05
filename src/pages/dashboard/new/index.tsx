import { ChangeEvent, useContext, useState } from "react";
import { Container } from "../../../components/container";
import { DashbordHeader } from "../../../components/panelheader";

import { FiTrash, FiUpload } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { Input } from '../../../components/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthContext } from "../../../contexts/AuthContext"
import { v4 as uuidV4 } from 'uuid'

import { storage, db } from '../../../services/firebaseConnection'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'

const schema = z.object({
  name: z.string().nonempty("O campo nome é obrigatório"),
  location: z.string().nonempty("O bairro é obrigatório"),
  bedroom: z.string().nonempty("A quantidade de quarto é obrigatória"),
  garage: z.string().nonempty("A quantidade de vaga é obrigatória"),
  price: z.string().nonempty("O preço é obrigatório"),
  city: z.string().nonempty("A cidade é obrigatória"),
  whatsapp: z.string().nonempty("O campo Telefone é obrigatório").min(10).refine((value) => /^\d{11,12}$/.test(value), {
    message: "Número de telefone invalido"
  }),
  description: z.string().nonempty("A descrição é obrigatória")
}) 

type FormData = z.infer<typeof schema> 

interface ImageItemProps {
  uid: string;
  name: string;
  previewUrl: string;
  url: string;
}

export function New() {
  const { user } = useContext(AuthContext)
  const [selectedFile, setSelectedFile] = useState(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  const [ imoImages, setImoImages ] = useState<ImageItemProps[]>([])

  async  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.files && e.target.files[0]) {
      const image = e.target.files[0]

      if(image.type === 'image/jpeg' || image.type === 'image.png') {
        await handleUpload(image)
      } else {
        alert("Envie uma imagem jpeg ou png!")
        return;
      }  
    }
  }

  async function handleUpload(image: File) {
    if(!user?.uid) {
      return;
    }

    const currentUid = user?.uid;
    const uidImage = uuidV4();

    const uploadRef = ref(storage, `images/${currentUid}/${uidImage}`)

    uploadBytes(uploadRef, image)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref).then((donloadUrl) => {
        // console.log("URL DE ACESSO DA FOTO",donloadUrl)
        const imageItem = {
          name: uidImage,
          uid: currentUid,
          previewUrl: URL.createObjectURL(image),
          url: donloadUrl,
        }

        setImoImages((images) => [...images, imageItem])
      })
    })
  }

  function onSubmit(data: FormData) {

    if(imoImages.length === 0) {
      alert("Envie alguma imagem do imóvel!")
      return;
    }

    const imoListImages = imoImages.map( imo => {
      return {
        uid: imo.uid,
        name: imo.name,
        url: imo.url
      }
    })

    addDoc(collection(db, "imos"), {
      name: data.name,
      location: data.location,
      bedroom: data.bedroom,
      garage: data.garage,
      price: data.price,
      whatsapp: data.whatsapp,
      city: data.city,
      created: new Date(),
      owner: user?.name,
      uid: user?.uid,
      images: imoListImages,
    })
    .then((docRef) => {
      reset(); // Chamada para limpar os campos
      setImoImages([]);  // Limpar a lista de imagens após a submissão bem-sucedida
      console.log("CADASTRADO COM SUCESSO!");
    }).catch((error) => {
      console.error("ERRO AO CADASTRAR NO BANCO: ", error);
    })

  }

  async function handleDeleteImage(item: ImageItemProps) {
    const imagePath = `images/${item.uid}/${item.name}`;
    
    const imageRef = ref(storage, imagePath)

    try {
      await deleteObject(imageRef)
      setImoImages(imoImages.filter((imo) => imo.url !== item.url))
    } catch (err) {
      console.log("ERRO AO DELETAR")
      return
    }
  }

  return (
    <Container>
      <DashbordHeader />

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
        <button className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer border-gray-600 h-32 md:w-48">
          <div className="absolute cursor-pointer">
            <FiUpload size={30} color="#000" />
          </div>
          <div className="cursor-pointer"> 
            <input 
              type="file" 
              accept="image/*" 
              className="opacity-0 cursor-pointer"
              onChange={handleFile}            
            />
          </div>
        </button>

        {imoImages.map( item => (
          <div key={item.name} className="w-full h-32 flex items-center justify-center relative">
            <img
              src={item.previewUrl}
              className="rounded-lg w-full h-32 object-cover"
              alt="Foto do imóvel"
            />
            <button
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => handleDeleteImage(item)}
            >
              <FiTrash size={18}/>
            </button>
          </div>
        ))}
      </div>

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
        <form
          className="w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <p className="mb-2 font-medium">Nome do imóvel</p>
            <Input
              name="name"
              type="text"
              placeholder="Digite o nome do imóvel..."
              register={register}
              error={errors.name?.message}
            />
          </div>

          <div className="mb-3">
            <p className="mb-2 font-medium">Localização do imóvel</p>
            <Input
              type="text"
              name="location"
              placeholder="Bairro..."
              register={register}
              error={errors.location?.message}
            />
          </div>

          <div className="flex w-full mb-3 flex-row items-center gap-4">
            <div className="w-full">
              <p className="mb-2 font-medium">Descrição de quartos</p>
              <Input
                type="text"
                name="bedroom"
                placeholder="Ex: quantos quartos..."
                register={register}
                error={errors.bedroom?.message}
              />            
            </div>

            <div className="w-full">
              <p className="mb-2 font-medium">Descrição de vagas</p>
              <Input
                type="text"
                name="garage"
                placeholder="Ex: quantos vagas de garagem..."
                register={register}
                error={errors.garage?.message}
              />            
            </div>
          </div>

          <div className="flex w-full mb-3 flex-row items-center gap-4">
            <div className="w-full">
              <p className="mb-2 font-medium">Telefone / Whatsapp</p>
              <Input
                type="text"
                name="whatsapp"
                placeholder="Ex: (XX) XXXX-XXXX"
                register={register}
                error={errors.whatsapp?.message}
              />            
            </div>

            <div className="w-full">
              <p className="mb-2 font-medium">Cidade</p>
              <Input
                type="text"
                name="city"
                placeholder="Digite a cidade..."
                register={register}
                error={errors.city?.message}
              />            
            </div>
          </div>

          <div className="mb-3">
            <p className="mb-2 font-medium">Preço</p>
            <Input
              name="price"
              type="text"
              placeholder="Ex: 200.000..."
              register={register}
              error={errors.price?.message}
            />
          </div>

          <div className="mb-3">
            <p className="mb-2 font-medium">Descrição</p>
            <textarea
              className="border-2 w-full rounded-md h-24 px-2 resize-none"
              {...register("description")}
              name="description"
              id="description"
              placeholder="Digite a descriçaõ sobre o imóvel..."
              />
              {errors.description && <p className="mb-1 text-red-500">{errors.description.message}</p>}
          </div>

          <button type="submit" className="w-full rounded-md bg-zinc-900 text-white font-medium h-10 mb-5">
            Cadastar
          </button>


        </form>
      </div>
    </Container>
  );
}

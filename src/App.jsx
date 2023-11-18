
import './Header.jsx'
import { Header } from './Header.jsx'
import { MyCard } from './MyCard.jsx'
import {Footer} from './Footer.jsx'
function App() {
  const perros = [
    {
      titulo: "Carl",
      descripcion: "Es un perro muy fiel y cariñoso",
      imagen: "https://assets-global.website-files.com/63634f4a7b868a399577cf37/63d984e0b27da380450993ab_hasta%20que%CC%81%20edad%20crecen%20los%20perros.jpg",
      tagColor: "success",
      tagTitle: "Kiltro"

    },

    {
      titulo: "Marcelo",
      descripcion: "Es un perro muy mañoso, pero buen cuidador",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/f/fb/02_I_Exposici%C3%B3n_Monogr%C3%A1fica_Club_Rottweiler_de_Espa%C3%B1a_-_Santa_Brigida_-_Gran_Canaria.jpg",
      tagColor: "danger",
      tagTitle: "Rottweiler"

    },

    {
      titulo: "Ignacio",
      descripcion: "Es un perro muy elegante y grande",
      imagen: "https://www.bunko.pet/__export/1651781956111/sites/debate/img/2022/05/05/zeus_el_perro_gran_danxs_mas_alto_del_mundo2.png_1902800913.png",
      tagColor: "primary",
      tagTitle: "Gran Danés"

    },

    {
      titulo: "Gabriel",
      descripcion: "Es un perro muy bueno para la caza de aves",
      imagen: "https://fotos.perfil.com//2021/02/19/900/0/0219pointer-1130140.jpg",
      tagColor: "warning",
      tagTitle: "Perro Caza"
    }

  ]

  return (
    <div className='d-flex flex-column align-items-center gap-5' >
      <Header text="Adopta un perrito" />
      <div className='d-flex flex-row gap-2'>
        {
          perros.map((perro, index) => (
            <MyCard key={index} titulo={perro.titulo} descripcion={perro.descripcion} imagen={perro.imagen} tagColor={perro.tagColor} tagTitle={perro.tagTitle} />
          ))

        }
      </div>
      <Footer text="Esta es una colección de perros en adopción, agradecemos su cooperación" />
    </div>
  )
}

export default App

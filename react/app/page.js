import { Box1, Box2, Box3, Button, H1, H2, Link, Text } from "./components/StyleComponents"
import p1 from "./resources/p1.png"
import p2 from "./resources/p2.jpeg"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-12 px-4">
        <div>
          <H1>Ya están disponibles las entradas para el Real Madrid-Badalona del sábado, 4 de octubre, a las 17:00 h</H1>
          <br />
          <H2>Nuestro equipo disputa en el estadio Alfredo Di Stéfano el partido de la sexta jornada de la Liga F.</H2>
          <Image src={p1} alt="picture 1" />
          <br />
          <Text>Ya están a la venta las entradas para el partido que disputará el Real Madrid frente al Badalona en el estadio Alfredo Di Stéfano. Nuestro equipo afrontará en casa la sexta jornada de Liga el sábado, 4 de octubre, a las 17:00 h.

            Este miércoles 24 de septiembre, a las 12:00 h, se ha abierto el plazo para que los socios que lo deseen adquieran sus localidades. Los Madridistas Premium pueden comprarlas desde el jueves 25 de septiembre, a las 12:00 h; y el público general, a partir del viernes 26 de septiembre, a las 12:00 h. Los precios son 8 euros para socios, 10 euros para Madridistas Premium y 15 euros para el público general.</Text>
          <br />
          <Link href="">COMPRA AQUÍ TUS ENTRADAS</Link>
          <br />
          <br />
          <Box1>
            <Box2>
              <Image style={{ borderRadius: 12 }} src={p2} alt="picture 2" />
            </Box2>
            <Box3>
                <Text>-35% en tus entradas por ser Madridista Premium</Text>
                <Button>Hazte Premium Ahora</Button>
            </Box3>
          </Box1>
        </div>

      </main>
    </div>
  );
}

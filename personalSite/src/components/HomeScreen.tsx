import { Paper, Card, Group, Image, Text } from "@mantine/core";
import NestJSLogo from "../assets/NestJS.svg.png";
import ReactLogo from "../assets/React-icon.svg.png";
import me from "../assets/me.jpg";
import TypeScriptLogo from "../assets/typescript.png";
import "../styles.css";

function HomeScreen() {
  return (
    <>
      <div style={{ display: "flex" }} className="card">
        <Card
          shadow="sm"
          padding="sm"
          radius="xl"
          withBorder
          style={{ width: "30%" }}
        >
          <Card.Section>
            <Image src={me} height={"60vh"} alt="Norway" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={700} size="xl">
              Yuri Pires Gonçalves
            </Text>
          </Group>

          <Text size="lg" color="dimmed">
            Estudante de Análise e Desenvolvimento de Sistemas, com habilidades
            em Python, Java, JavaScript, TypeScript, React, NestJs, HTML e CSS.
            Tenho experiência em integração de APIs e desenvolvimento de APIs
            REST. Sou autodidata, proativo e apaixonado por resolver problemas
            complexos. Busco oportunidades para aplicar meus conhecimentos e
            crescer como desenvolvedor de software.
          </Text>
        </Card>
        <div
          style={{
            display: "flex",
            marginLeft: "10%",
            flexDirection: "column",
          }}
        >
          <h1 style={{ marginLeft: "30%" }}>Tecnologias que utilizo:</h1>
          <div style={{ display: "flex" }}>
            <Image
              src={NestJSLogo}
              className="grow"
              alt="Norway"
              style={{ width: "20rem", padding: "2rem" }}
              onClick={() => {
                window.open("https://docs.nestjs.com/");
              }}
            />
            <Image
              src={ReactLogo}
              className="grow"
              alt="Norway"
              style={{ width: "20rem", padding: "2rem" }}
              onClick={() => {
                window.open("https://react.dev/");
              }}
            />
            <Image
              src={TypeScriptLogo}
              className="grow"
              alt="Norway"
              style={{ width: "20rem", padding: "2rem" }}
              onClick={() => {
                window.open("https://www.typescriptlang.org/");
              }}
            />
          </div>
          <div style={{marginTop:'5rem'}}>
          <h1 style={{ marginLeft: "30%" }}>Um pouco mais sobre o Yuri:</h1>
          <Paper shadow="xl" radius="xl" p="xl" withBorder>
            <Text>
              Vou utilizar esse espaço para contar um pouco mais sobre como sou
              e do que gosto.
            </Text>
            <Text>
              Atualmente tenho 22 anos, moro no interior de São Paulo.
            </Text>
            <Text>
              Sou apaixonado por tecnologia e por resolver problemas complexos.
            </Text>
            <Text>
              Também gosto muito de gatos, jogos, mangás, animes e filmes.
            </Text>
            <Text>
              Tenho um gosto eclético em relação a música, mas gosto muito de
              indie e músicas mais calmas.
            </Text>
            <Text>
              No momento já li alguns mangás mais famosos, estou indo para
              Vinland Saga. Meu{" "}
              <Text
                span
                component="a"
                href="https://myanimelist.net/profile/IsiliathPires"
                c="blue"
              >
                M.A.L.
              </Text>
            </Text>
            <Text>
              Meus jogos favoritos são:{" "}
              <Text span c="red">
                Valorant
              </Text>
              ,{" "}
              <Text
                span
                variant="gradient"
                gradient={{
                  from: "gold",
                  to: "red",
                  deg: 135,
                }}
                inherit
              >
                Persona 4 e 5
              </Text>
             , também sou fã de Rouguelikes em geral.
            </Text>
          </Paper>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
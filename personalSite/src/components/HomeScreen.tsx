import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import me from "../assets/me.jpg";
import NestJSLogo from "../assets/NestJS.svg.png";
import TypeScriptLogo from "../assets/typescript.png";
import ReactLogo from "../assets/React-icon.svg.png";
import "../styles.css";

function HomeScreen() {
  return (
    <>
      <div style={{ display: "flex" }} className="card">
        <Card
          shadow="sm"
          padding="lg"
          radius="lg"
          withBorder
          style={{ width: "30%" }}
        >
          <Card.Section>
            <Image src={me} height={"60vh"} alt="Norway" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Yuri Pires Gonçalves</Text>
          </Group>

          <Text size="sm" color="dimmed">
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
            marginLeft: "20%",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ marginLeft: "40%" }}>Tecnologias</h1>
          <div style={{ display: "flex" }}>
            <Image
              src={NestJSLogo}
              className="nest"
              height={"20vh"}
              alt="Norway"
              style={{ padding: "2rem" }}
            />
            <Image
              src={ReactLogo}
              className="react-logo"
              height={"20vh"}
              alt="Norway"
              style={{ padding: "2rem 1rem 2rem"}}
            />
            <Image
              src={TypeScriptLogo}
              height={"20vh"}
              alt="Norway"
              style={{ padding: "2rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;

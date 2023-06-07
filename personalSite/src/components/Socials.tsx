import {
  Badge,
  Box,
  Button,
  Card,
  Center,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import spotify from "../assets/spotify.png";
import steam from "../assets/steam.png";
import { Link } from "react-router-dom";

function Socials() {
  return (
    <>
      <Title>Socials</Title>
      <div
        className="card"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "1rem",
          justifyContent: "center",
        }}
      >
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{ margin: "1rem" }}
        >
          <Card.Section>
            <Box
              style={{
                backgroundColor: "white",
              }}
            >
              <Center>
                <Image
                  src={gmail}
                  height={160}
                  style={{ width: "12rem" }}
                  alt="Norway"
                />
              </Center>
            </Box>
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Email</Text>
            <Badge color="blue" variant="light">
              Work
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            Caso queira entrar em contato comigo, envie um email para
            yuripiresbr@gmail.com
          </Text>
          <Link to="mailto:yuripiresbr@gmail.com?subject=Olá%20%20Yuri&body=Sua%20Mensagem%20">
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Envie agora mesmo!
            </Button>
          </Link>
        </Card>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{ margin: "1rem" }}
        >
          <Card.Section>
            <Box
              style={{
                backgroundColor: "white",
              }}
            >
              <Center>
                <Image
                  src={github}
                  height={160}
                  style={{ width: "10.3rem" }}
                  alt="Norway"
                />
              </Center>
            </Box>
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>GitHub</Text>
            <Badge color="blue" variant="light">
              Work
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            Caso queira ver meus projetos, acesse meu GitHub e fique a vontade
            para dar um feedback ou até mesmo contribuir com algum projeto!
          </Text>
          <Link to="https://github.com/YuriPiresG">
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Acesse meus repositórios.
            </Button>
          </Link>
        </Card>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{ margin: "1rem" }}
        >
          <Card.Section>
            <Box
              style={{
                backgroundColor: "#0274b3",
              }}
            >
              <Center>
                <Image
                  src={linkedin}
                  height={160}
                  style={{ width: "12rem" }}
                  alt="Norway"
                />
              </Center>
            </Box>
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>LinkedIn</Text>
            <Badge color="blue" variant="light">
              Work
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            Caso queira entrar em contato comigo, sinta-se a vontade para se conectar comigo no LinkedIn!
          </Text>

          <Link to="https://www.linkedin.com/in/yuripiresg1/">
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Veja o meu perfil.
            </Button>
          </Link>
        </Card>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{ margin: "1rem" }}
        >
          <Card.Section>
            <Box
              style={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              }}
            >
              <Center>
                <Image
                  src={instagram}
                  height={160}
                  style={{ width: "12rem" }}
                  alt="Norway"
                />
              </Center>
            </Box>
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Instagram</Text>
            <Badge color="green" variant="light">
              Casual
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            Caso queira entrar em contato comigo, sinta-se a vontade para me mandar uma mensagem no Instagram!
          </Text>
          <Link to="https://www.instagram.com/yuripirees/">
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Veja o meu perfil.
            </Button>
          </Link>
        </Card>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{ margin: "1rem" }}
        >
          <Card.Section>
            <Box
              style={{
                backgroundColor: "#191414",
              }}
            >
              <Center>
                <Image
                  src={spotify}
                  height={160}
                  style={{ width: "10rem" }}
                  alt="Norway"
                />
              </Center>
            </Box>
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Spotify</Text>
            <Badge color="green" variant="light">
              Casual
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
           Se você busca algumas playlists de gosto duvidoso, sinta-se a vontade para me seguir no Spotify!
          </Text>

          <Link to="https://open.spotify.com/user/12157163252">
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Veja o meu perfil.
            </Button>
          </Link>
        </Card>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{ margin: "1rem" }}
        >
          <Card.Section>
            <Box
              style={{
                backgroundColor: "#135b8e",
              }}
            >
              <Center>
                <Image
                  src={steam}
                  height={160}
                  style={{ width: "10rem" }}
                  alt="Norway"
                />
              </Center>
            </Box>
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Steam</Text>
            <Badge color="green" variant="light">
              Casual
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            Caso queira jogar algum jogo comigo, sinta-se a vontade para me adicionar na Steam!
          </Text>

          <Link to="https://steamcommunity.com/id/FateYuri">
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Veja o meu perfil.
            </Button>
          </Link>
        </Card>
      </div>
    </>
  );
}

export default Socials;

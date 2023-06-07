import { Carousel } from "@mantine/carousel";
import {
    Button,
    Paper,
    Text,
    Title,
    createStyles,
    rem
} from "@mantine/core";
import CoursePlanner from "../assets/coruja.png";
import TodoApp from "../assets/logotodo.png";
import playlistbuilder from "../assets/playlistbuilder.jpg";
import portfolio from "../assets/portfolio.jpg";
import "../styles.css";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  front: string;
  back: string;
  demo: string;
}

function Card({ image, title, category, front, back, demo }: CardProps) {
  const { classes } = useStyles();

  return (
    <div className="card">
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <div>
          <Text
            style={{ WebkitTextStroke: "0.5px black" }}
            className={classes.category}
            size="xs"
          >
            {category}
          </Text>
          <Title
            c="white"
            style={{ WebkitTextStroke: "0.7px black" }}
            order={3}
            className={classes.title}
          >
            {title}
          </Title>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          {demo && (
            <Button
              style={{ marginRight: "1rem" }}
              variant="white"
              color="dark"
              onClick={() => window.open(demo)}
            >
              Demo
            </Button>
          )}
          {front && (
            <Button
              style={{ marginRight: "1rem" }}
              variant="white"
              color="dark"
              onClick={() => window.open(front)}
            >
              Front
            </Button>
          )}
          {back && (
            <Button
              variant="white"
              color="dark"
              onClick={() => window.open(back)}
            >
              Back
            </Button>
          )}
        </div>
      </Paper>
    </div>
  );
}

const data = [
  {
    image: CoursePlanner,
    title: "Course Planner",
    category: "Fullstack",
    front:
      "https://github.com/YuriPiresG/front-end-gestao-facul/tree/master/estud",
    back: "https://github.com/YuriPiresG/proj-gestao-facul",
    demo: "https://front-end-gestao-facul.vercel.app",
  },
  {
    image: TodoApp,
    title: "Todo App",
    category: "Fullstack",
    front: "https://github.com/YuriPiresG/TodoClient",
    back: "https://github.com/YuriPiresG/todoServer",
    demo: "https://todo-client-hf88.vercel.app/?",
  },
  {
    image: playlistbuilder,
    title: "Playlist Builder",
    category: "Frontend",
    front: "https://github.com/YuriPiresG",
    back: "",
    demo: "https://playlist-builder-client.vercel.app",
  },
  {
    image: portfolio,
    title: "Yuri's Portfolio",
    category: "Frontend",
    front:
      "https://github.com/YuriPiresG/PersonalSite/tree/master/personalSite",
    back: "",
    demo: "https://yuri-portfolio.vercel.app",
  },
];

function Projects() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: "lg", slideSize: "100%", slideGap: 2 }]}
        slideGap="xl"
        align="start"
        loop
      >
        {slides}
      </Carousel>{" "}
      <br />
      <div className="card">
        <Title style={{ marginLeft: "1rem" }} order={2}>
          Aba de projetos
        </Title>{" "}
        <br />
        <Paper shadow="xl" radius="xl" p="xl" withBorder>
          <Text size="lg">
            Aqui você pode ver alguns dos meus projetos, tanto pessoais quanto
            acadêmicos.
          </Text>
          <Text size="lg">
            Todos os projetos estão disponíveis no meu github e alguns deles
            estão hospedados no Vercel.
          </Text>
        </Paper>
      </div>
    </>
  );
}
export default Projects;

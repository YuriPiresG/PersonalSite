import { AppShell, Button, Header, Text } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <AppShell
      padding="md"
      header={
        <Header
          height={50}
          p="xs"
          color="red"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Text weight={400} size="xl" style={{ fontFamily: "Bebas Neue" }}>
            Yuri's Portfolio
          </Text>
          <div style={{ marginLeft: "auto" }}>
            <Link to="/">
              <Button variant="subtle" color="gray" size="sm">
                Home
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="subtle" color="gray" size="sm">
                Projects
              </Button>
            </Link>
            <Link to="/socials">
              <Button variant="subtle" color="gray" size="sm">
                Socials
              </Button>
            </Link>
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
}

export default Layout;

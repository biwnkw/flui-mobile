import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4F6F52",
        tabBarInactiveTintColor: "#8A8F8A",
        tabBarStyle: {
          backgroundColor: "#FAFAF8",
          borderTopColor: "#E6E8E3",
          height: 82,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
        }}
      />

      <Tabs.Screen
        name="mapa"
        options={{
          title: "Mapa",
        }}
      />

      <Tabs.Screen
        name="busca"
        options={{
          title: "Busca",
        }}
      />

      <Tabs.Screen
        name="favoritos"
        options={{
          title: "Favoritos",
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
        }}
      />

      {/* Ocultas */}
      <Tabs.Screen
        name="care"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="ecoscore"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
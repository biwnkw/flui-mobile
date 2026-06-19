import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CareScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Flui Care</Text>
      <Text style={styles.subtitle}>
        Escolha pontos de recarga considerando segurança, família e acessibilidade.
      </Text>

      <View style={styles.heroCard}>
        <Text style={styles.heroLabel}>Recomendação inteligente</Text>
        <Text style={styles.heroTitle}>Eco Park Station</Text>
        <Text style={styles.heroText}>
          Melhor opção próxima para quem busca estrutura familiar, segurança e energia limpa.
        </Text>

        <TouchableOpacity style={styles.heroButton} onPress={() => router.push("/carregador/1")}>
          <Text style={styles.heroButtonText}>Ver ponto recomendado</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Modos de cuidado</Text>

      <View style={styles.card}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>👶</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Família</Text>
          <Text style={styles.text}>
            Prioriza estações próximas a fraldário, sala de amamentação, banheiro familiar e farmácia.
          </Text>
          <Text style={styles.metric}>3 pontos compatíveis próximos</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>🛡️</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Segurança</Text>
          <Text style={styles.text}>
            Destaca locais bem iluminados, monitorados e próximos a bases policiais ou delegacias.
          </Text>
          <Text style={styles.metric}>5 pontos com segurança reforçada</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>♿</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Acessibilidade</Text>
          <Text style={styles.text}>
            Indica pontos com vaga acessível, rampa, elevador e proximidade de hospitais ou farmácias.
          </Text>
          <Text style={styles.metric}>4 pontos acessíveis na região</Text>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Como funciona?</Text>
        <Text style={styles.infoText}>
          Nesta etapa, os dados são simulados. O objetivo é demonstrar como o app pode mapear serviços úteis ao redor dos pontos de recarga.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAF8",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#1F2933",
    marginTop: 56,
  },
  subtitle: {
    fontSize: 16,
    color: "#5F6B5B",
    marginTop: 8,
    lineHeight: 23,
  },
  heroCard: {
    backgroundColor: "#4F6F52",
    borderRadius: 30,
    padding: 24,
    marginTop: 24,
  },
  heroLabel: {
    color: "#D8E3D5",
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 12,
  },
  heroText: {
    color: "#EAF1E7",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
  },
  heroButton: {
    backgroundColor: "#FAFAF8",
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  heroButtonText: {
    color: "#4F6F52",
    fontWeight: "900",
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#1F2933",
    marginTop: 28,
    marginBottom: 14,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E6E8E3",
    flexDirection: "row",
    gap: 14,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: "#D8E3D5",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 22,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#1F2933",
  },
  text: {
    fontSize: 15,
    color: "#5F6B5B",
    lineHeight: 21,
    marginTop: 6,
  },
  metric: {
    fontSize: 14,
    color: "#4F6F52",
    fontWeight: "900",
    marginTop: 10,
  },
  infoCard: {
    backgroundColor: "#D8E3D5",
    borderRadius: 26,
    padding: 22,
    marginTop: 10,
    marginBottom: 42,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#1F2933",
  },
  infoText: {
    fontSize: 15,
    color: "#3F463F",
    marginTop: 8,
    lineHeight: 22,
  },
});
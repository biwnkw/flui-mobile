import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function EcoScoreScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>EcoScore</Text>
      <Text style={styles.subtitle}>
        Acompanhe o impacto ambiental das suas recargas.
      </Text>

      <View style={styles.heroCard}>
        <Text style={styles.level}>Nível Verde</Text>
        <Text style={styles.score}>780</Text>
        <Text style={styles.scoreLabel}>pontos sustentáveis</Text>

        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.progressText}>
          Faltam 120 pontos para o nível Floresta
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Impacto do mês</Text>

      <View style={styles.grid}>
        <View style={styles.metricCard}>
          <Text style={styles.metricIcon}>🌱</Text>
          <Text style={styles.metricValue}>420 kg</Text>
          <Text style={styles.metricLabel}>CO₂ evitado</Text>
        </View>

        <View style={styles.metricCard}>
          <Text style={styles.metricIcon}>⚡</Text>
          <Text style={styles.metricValue}>85%</Text>
          <Text style={styles.metricLabel}>energia limpa</Text>
        </View>
      </View>

      <View style={styles.grid}>
        <View style={styles.metricCard}>
          <Text style={styles.metricIcon}>🚗</Text>
          <Text style={styles.metricValue}>150</Text>
          <Text style={styles.metricLabel}>recargas verdes</Text>
        </View>

        <View style={styles.metricCard}>
          <Text style={styles.metricIcon}>🌳</Text>
          <Text style={styles.metricValue}>6</Text>
          <Text style={styles.metricLabel}>árvores equivalentes</Text>
        </View>
      </View>

      <View style={styles.communityCard}>
        <Text style={styles.cardTitle}>Meta da comunidade</Text>
        <Text style={styles.communityText}>
          Usuários Flui já evitaram 72 de 100 toneladas de CO₂.
        </Text>

        <View style={styles.communityBar}>
          <View style={styles.communityProgress} />
        </View>

        <Text style={styles.communityPercent}>72% da meta alcançada</Text>
      </View>

      <Text style={styles.sectionTitle}>Conquistas</Text>

      <View style={styles.badgeCard}>
        <Text style={styles.badge}>Primeira recarga sustentável</Text>
        <Text style={styles.badge}>100 kg de CO₂ evitados</Text>
        <Text style={styles.badge}>Energia limpa priorizada</Text>
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
    padding: 28,
    marginTop: 24,
  },
  level: {
    color: "#D8E3D5",
    fontSize: 15,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  score: {
    color: "#FFFFFF",
    fontSize: 64,
    fontWeight: "900",
    marginTop: 8,
  },
  scoreLabel: {
    color: "#EAF1E7",
    fontSize: 16,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#739072",
    borderRadius: 99,
    marginTop: 22,
    overflow: "hidden",
  },
  progress: {
    width: "78%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 99,
  },
  progressText: {
    color: "#EAF1E7",
    fontSize: 14,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#1F2933",
    marginTop: 28,
    marginBottom: 14,
  },
  grid: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 14,
  },
  metricCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E6E8E3",
  },
  metricIcon: {
    fontSize: 24,
    marginBottom: 12,
  },
  metricValue: {
    fontSize: 26,
    fontWeight: "900",
    color: "#1F2933",
  },
  metricLabel: {
    fontSize: 14,
    color: "#5F6B5B",
    marginTop: 6,
  },
  communityCard: {
    backgroundColor: "#D8E3D5",
    borderRadius: 28,
    padding: 22,
    marginTop: 8,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: "900",
    color: "#1F2933",
  },
  communityText: {
    fontSize: 15,
    color: "#3F463F",
    lineHeight: 22,
    marginTop: 8,
  },
  communityBar: {
    height: 10,
    backgroundColor: "#FAFAF8",
    borderRadius: 99,
    marginTop: 18,
    overflow: "hidden",
  },
  communityProgress: {
    width: "72%",
    height: "100%",
    backgroundColor: "#4F6F52",
    borderRadius: 99,
  },
  communityPercent: {
    color: "#4F6F52",
    fontWeight: "900",
    fontSize: 14,
    marginTop: 10,
  },
  badgeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E6E8E3",
    marginBottom: 42,
  },
  badge: {
    fontSize: 15,
    color: "#1F2933",
    fontWeight: "700",
    marginBottom: 12,
  },
});
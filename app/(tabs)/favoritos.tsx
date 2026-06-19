import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FavoritosScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Favoritos</Text>

      <Text style={styles.subtitle}>
        Acesse rapidamente seus pontos de recarga preferidos.
      </Text>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryNumber}>2</Text>
        <Text style={styles.summaryText}>
          pontos salvos para acesso rápido
        </Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>favoritos</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>visitas</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Estações favoritas</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/carregador/1")}
      >
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Eco Park Station</Text>

          <Text style={styles.text}>
            1,2 km • 3 vagas livres • 150 kW
          </Text>

          <Text style={styles.green}>
            Família • Segurança • Energia Solar
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/carregador/2")}
      >
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Solar Charge Hub</Text>

          <Text style={styles.text}>
            2,4 km • 1 vaga livre • 80 kW
          </Text>

          <Text style={styles.green}>
            Hospital • Delegacia • Energia Renovável
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          Por que salvar favoritos?
        </Text>

        <Text style={styles.infoText}>
          Favoritos permitem acessar rapidamente estações confiáveis,
          sustentáveis e compatíveis com suas necessidades.
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

  summaryCard: {
    backgroundColor: "#4F6F52",
    borderRadius: 30,
    padding: 28,
    marginTop: 24,
  },

  summaryNumber: {
    fontSize: 54,
    fontWeight: "900",
    color: "#FFFFFF",
  },

  summaryText: {
    color: "#EAF1E7",
    fontSize: 16,
    marginTop: 4,
  },

  statsRow: {
    flexDirection: "row",
    gap: 14,
    marginTop: 18,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E6E8E3",
  },

  statNumber: {
    fontSize: 28,
    fontWeight: "900",
    color: "#4F6F52",
  },

  statLabel: {
    fontSize: 14,
    color: "#5F6B5B",
    marginTop: 4,
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
    padding: 20,
    borderRadius: 24,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E6E8E3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardContent: {
    flex: 1,
    paddingRight: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#1F2933",
  },

  text: {
    fontSize: 15,
    color: "#5F6B5B",
    marginTop: 8,
  },

  green: {
    fontSize: 14,
    color: "#4F6F52",
    fontWeight: "900",
    marginTop: 8,
  },

  arrow: {
    fontSize: 34,
    color: "#4F6F52",
  },

  infoCard: {
    backgroundColor: "#D8E3D5",
    borderRadius: 26,
    padding: 22,
    marginTop: 8,
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
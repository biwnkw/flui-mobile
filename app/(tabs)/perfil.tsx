import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PerfilScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.subtitle}>Dados simulados do motorista.</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>M</Text>
        </View>

        <View>
          <Text style={styles.name}>Maria Silva</Text>
          <Text style={styles.info}>Motorista Flui</Text>
        </View>
      </View>

      <View style={styles.grid}>
        <View style={styles.metric}>
          <Text style={styles.metricValue}>24</Text>
          <Text style={styles.metricLabel}>Recargas</Text>
        </View>

        <View style={styles.metric}>
          <Text style={styles.metricValue}>780</Text>
          <Text style={styles.metricLabel}>EcoScore</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Veículo</Text>
        <Text style={styles.text}>Modelo: BYD Dolphin</Text>
        <Text style={styles.text}>Autonomia estimada: 330 km</Text>
        <Text style={styles.text}>Conector preferido: CCS2</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Resumo Ambiental</Text>
        <Text style={styles.text}>420 kg de CO₂ evitados</Text>
        <Text style={styles.text}>24 recargas sustentáveis</Text>
        <Text style={styles.text}>Nível Verde</Text>
        <Text style={styles.text}>85% de energia renovável utilizada</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Histórico Recente</Text>
        <Text style={styles.text}>• Eco Park Station - 34 kWh</Text>
        <Text style={styles.text}>• Solar Charge Hub - 22 kWh</Text>
        <Text style={styles.text}>• Eco Park Station - 28 kWh</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Preferências Flui Care</Text>
        <Text style={styles.text}>• Priorizar locais acessíveis</Text>
        <Text style={styles.text}>• Exibir áreas monitoradas</Text>
        <Text style={styles.text}>• Mostrar serviços familiares</Text>
        <Text style={styles.text}>• Priorizar energia renovável</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Preferências</Text>
      </TouchableOpacity>
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

  profileCard: {
    backgroundColor: "#4F6F52",
    borderRadius: 30,
    padding: 24,
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#FAFAF8",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#4F6F52",
    fontSize: 24,
    fontWeight: "900",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
  },

  info: {
    color: "#EAF1E7",
    fontSize: 15,
    marginTop: 4,
  },

  grid: {
    flexDirection: "row",
    gap: 14,
    marginTop: 18,
  },

  metric: {
    flex: 1,
    backgroundColor: "#D8E3D5",
    borderRadius: 24,
    padding: 20,
  },

  metricValue: {
    fontSize: 32,
    fontWeight: "900",
    color: "#4F6F52",
  },

  metricLabel: {
    fontSize: 14,
    color: "#3F463F",
    marginTop: 6,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    padding: 22,
    marginTop: 18,
    borderWidth: 1,
    borderColor: "#E6E8E3",
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: "900",
    color: "#1F2933",
    marginBottom: 10,
  },

  text: {
    fontSize: 15,
    color: "#3F463F",
    marginBottom: 8,
    lineHeight: 21,
  },

  button: {
    backgroundColor: "#4F6F52",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 22,
    marginBottom: 42,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },
});
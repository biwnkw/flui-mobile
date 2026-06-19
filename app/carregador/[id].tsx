import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const chargers = {
  "1": {
    name: "Eco Park Station",
    distance: "1,2 km",
    available: "3 de 4 vagas disponíveis",
    power: "150 kW",
    price: "R$ 1,89/kWh",
    time: "25 min",
    energy: "85% energia solar",
    co2: "128 kg de CO₂ evitados este mês",
    family: ["Fraldário a 50m", "Sala de amamentação a 80m", "Banheiro familiar"],
    security: ["Área monitorada", "Base policial a 350m", "Iluminação reforçada"],
    accessibility: ["Vaga acessível", "Elevador", "Farmácia a 120m"],
  },
  "2": {
    name: "Solar Charge Hub",
    distance: "2,4 km",
    available: "1 de 2 vagas disponíveis",
    power: "80 kW",
    price: "R$ 1,59/kWh",
    time: "40 min",
    energy: "Energia renovável mista",
    co2: "76 kg de CO₂ evitados este mês",
    family: ["Banheiro familiar", "Farmácia a 90m"],
    security: ["Delegacia a 300m", "Segurança privada", "Local bem iluminado"],
    accessibility: ["Hospital a 400m", "Vaga próxima", "Rampa de acesso"],
  },
};

export default function ChargerDetailsScreen() {
  const { id } = useLocalSearchParams();
  const charger = chargers[id as "1" | "2"] || chargers["1"];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{charger.name}</Text>
      <Text style={styles.subtitle}>
        {charger.distance} • {charger.available}
      </Text>

      <View style={styles.status}>
        <Text style={styles.statusText}>Disponível agora</Text>
      </View>

      <View style={styles.grid}>
        <View style={styles.metric}>
          <Text style={styles.metricValue}>{charger.power}</Text>
          <Text style={styles.metricLabel}>Potência</Text>
        </View>

        <View style={styles.metric}>
          <Text style={styles.metricValue}>{charger.price}</Text>
          <Text style={styles.metricLabel}>Preço</Text>
        </View>

        <View style={styles.metric}>
          <Text style={styles.metricValue}>{charger.time}</Text>
          <Text style={styles.metricLabel}>Tempo médio</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Avaliação</Text>
        <Text style={styles.rating}>★★★★★</Text>
        <Text style={styles.text}>4,8 de 5 baseado em 214 avaliações simuladas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Conectores</Text>
        <Text style={styles.tag}>CCS2</Text>
        <Text style={styles.tag}>Tipo 2</Text>
        <Text style={styles.tag}>CHAdeMO</Text>
      </View>

      <View style={styles.cardGreen}>
        <Text style={styles.cardTitle}>Sustentabilidade</Text>
        <Text style={styles.text}>{charger.energy}</Text>
        <Text style={styles.text}>{charger.co2}</Text>
        <Text style={styles.text}>Equivalente a 6 árvores absorvendo carbono por um ano</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Flui Care</Text>

        <Text style={styles.category}>Família</Text>
        {charger.family.map((item) => (
          <Text key={item} style={styles.text}>• {item}</Text>
        ))}

        <Text style={styles.category}>Segurança</Text>
        {charger.security.map((item) => (
          <Text key={item} style={styles.text}>• {item}</Text>
        ))}

        <Text style={styles.category}>Acessibilidade</Text>
        {charger.accessibility.map((item) => (
          <Text key={item} style={styles.text}>• {item}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Serviços próximos</Text>
        <Text style={styles.text}>• Cafeteria — 80m</Text>
        <Text style={styles.text}>• Restaurante — 150m</Text>
        <Text style={styles.text}>• Farmácia — 120m</Text>
        <Text style={styles.text}>• Mercado — 300m</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Traçar rota</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Adicionar aos Favoritos</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAF8",
    padding: 24,
  },
  back: {
    marginTop: 48,
    color: "#4F6F52",
    fontSize: 16,
    fontWeight: "800",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#1F2933",
    marginTop: 24,
  },
  subtitle: {
    fontSize: 16,
    color: "#5F6B5B",
    marginTop: 8,
    lineHeight: 23,
  },
  status: {
    backgroundColor: "#D8E3D5",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 99,
    alignSelf: "flex-start",
    marginTop: 18,
  },
  statusText: {
    color: "#4F6F52",
    fontWeight: "900",
  },
  grid: {
    flexDirection: "row",
    gap: 12,
    marginTop: 22,
  },
  metric: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E6E8E3",
  },
  metricValue: {
    fontSize: 17,
    fontWeight: "900",
    color: "#1F2933",
  },
  metricLabel: {
    fontSize: 13,
    color: "#5F6B5B",
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
  cardGreen: {
    backgroundColor: "#D8E3D5",
    borderRadius: 26,
    padding: 22,
    marginTop: 18,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#1F2933",
    marginBottom: 12,
  },
  rating: {
    fontSize: 24,
    color: "#4F6F52",
    marginBottom: 10,
    letterSpacing: 2,
  },
  tag: {
    alignSelf: "flex-start",
    backgroundColor: "#D8E3D5",
    color: "#4F6F52",
    fontSize: 15,
    fontWeight: "900",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 99,
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    fontWeight: "900",
    color: "#4F6F52",
    marginTop: 14,
    marginBottom: 6,
  },
  text: {
    fontSize: 15,
    color: "#3F463F",
    marginBottom: 7,
    lineHeight: 21,
  },
  button: {
    backgroundColor: "#4F6F52",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 22,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 12,
    marginBottom: 42,
    borderWidth: 1,
    borderColor: "#4F6F52",
  },
  secondaryButtonText: {
    color: "#4F6F52",
    fontSize: 16,
    fontWeight: "900",
  },
});
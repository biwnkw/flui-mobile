import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BuscaScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Busca</Text>

      <Text style={styles.subtitle}>
        Encontre o carregador ideal para sua necessidade.
      </Text>

      <View style={styles.searchBox}>
        <Text style={styles.searchText}>
          🔍 Buscar carregador, endereço ou serviço
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Filtros</Text>

      <View style={styles.filters}>
        <Text style={styles.filterActive}>Todos</Text>
        <Text style={styles.filter}>24h</Text>
        <Text style={styles.filter}>Família</Text>
        <Text style={styles.filter}>Seguro</Text>
        <Text style={styles.filter}>Hospital</Text>
        <Text style={styles.filter}>Solar</Text>
      </View>

      <Text style={styles.sectionTitle}>Buscas populares</Text>

      <View style={styles.popularContainer}>
        <View style={styles.popularTag}>
          <Text style={styles.popularText}>Energia Solar</Text>
        </View>

        <View style={styles.popularTag}>
          <Text style={styles.popularText}>Família</Text>
        </View>

        <View style={styles.popularTag}>
          <Text style={styles.popularText}>Hospital</Text>
        </View>

        <View style={styles.popularTag}>
          <Text style={styles.popularText}>Segurança</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Resultados sugeridos</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/carregador/1")}
      >
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Eco Park Station</Text>

          <Text style={styles.text}>
            1,2 km • 150 kW • 3 vagas disponíveis
          </Text>

          <Text style={styles.green}>
            85% energia solar
          </Text>

          <Text style={styles.mini}>
            Fraldário • Sala de amamentação • Segurança
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
            2,4 km • 80 kW • 1 vaga disponível
          </Text>

          <Text style={styles.green}>
            Energia renovável mista
          </Text>

          <Text style={styles.mini}>
            Delegacia • Hospital • Farmácia
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Recomendação Inteligente</Text>

        <Text style={styles.infoText}>
          A Flui combina disponibilidade, sustentabilidade,
          segurança, acessibilidade e serviços próximos para sugerir
          os melhores pontos de recarga.
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
  searchBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#E6E8E3",
  },
  searchText: {
    color: "#8A8F8A",
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#1F2933",
    marginTop: 28,
    marginBottom: 14,
  },
  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  filterActive: {
    backgroundColor: "#4F6F52",
    color: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 99,
    fontWeight: "900",
  },
  filter: {
    backgroundColor: "#FFFFFF",
    color: "#4F6F52",
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 99,
    fontWeight: "900",
    borderWidth: 1,
    borderColor: "#E6E8E3",
  },
  popularContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  popularTag: {
    backgroundColor: "#D8E3D5",
    borderRadius: 99,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  popularText: {
    color: "#4F6F52",
    fontWeight: "800",
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
    fontSize: 15,
    color: "#4F6F52",
    fontWeight: "900",
    marginTop: 8,
  },
  mini: {
    fontSize: 13,
    color: "#8A8F8A",
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
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.top}>
        <Text style={styles.logo}>Flui</Text>

        <TouchableOpacity style={styles.profile} onPress={() => router.push("/perfil")}>
          <Text style={styles.profileText}>M</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Encontre sua próxima recarga</Text>

      <Text style={styles.subtitle}>
        Pontos próximos, seguros e com impacto ambiental reduzido.
      </Text>

      <TouchableOpacity style={styles.searchBox} onPress={() => router.push("/busca")}>
        <Text style={styles.searchText}>🔍 Buscar carregador, bairro ou serviço</Text>
      </TouchableOpacity>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.action} onPress={() => router.push("/mapa")}>
          <Text style={styles.actionIcon}>⚡</Text>
          <Text style={styles.actionText}>Rápida</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={() => router.push("/ecoscore")}>
          <Text style={styles.actionIcon}>🌱</Text>
          <Text style={styles.actionText}>Verde</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={() => router.push("/care")}>
          <Text style={styles.actionIcon}>🛡️</Text>
          <Text style={styles.actionText}>Segura</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.featureRow}>
        <TouchableOpacity style={styles.featureCard} onPress={() => router.push("/care")}>
          <Text style={styles.featureIcon}>🛡️</Text>
          <Text style={styles.featureTitle}>Flui Care</Text>
          <Text style={styles.featureText}>Segurança, família e acessibilidade</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureCard} onPress={() => router.push("/ecoscore")}>
          <Text style={styles.featureIcon}>🌱</Text>
          <Text style={styles.featureTitle}>EcoScore</Text>
          <Text style={styles.featureText}>Veja seu impacto ambiental</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Próximos de você</Text>
        <TouchableOpacity onPress={() => router.push("/mapa")}>
          <Text style={styles.seeAll}>Ver mapa</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/carregador/1")}>
        <View>
          <Text style={styles.cardTitle}>Eco Park Station</Text>
          <Text style={styles.cardText}>1,2 km • 3 de 4 disponíveis</Text>
          <Text style={styles.cardText}>150 kW • R$ 1,89/kWh</Text>
        </View>

        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Livre</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/carregador/2")}>
        <View>
          <Text style={styles.cardTitle}>Solar Charge Hub</Text>
          <Text style={styles.cardText}>2,4 km • 1 de 2 disponíveis</Text>
          <Text style={styles.cardText}>80 kW • R$ 1,59/kWh</Text>
        </View>

        <View style={styles.statusBadgeLight}>
          <Text style={styles.statusTextDark}>Solar</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.impactCard}>
        <View>
          <Text style={styles.impactLabel}>Impacto do mês</Text>
          <Text style={styles.impactNumber}>128 kg</Text>
          <Text style={styles.impactText}>de CO₂ evitados</Text>
        </View>

        <View style={styles.impactCircle}>
          <Text style={styles.impactCircleText}>🌱</Text>
        </View>
      </View>

      <View style={styles.lastCard}>
        <Text style={styles.lastTitle}>Última recarga</Text>
        <Text style={styles.lastText}>Eco Park Station</Text>
        <Text style={styles.lastSmall}>34 kWh • R$ 62,40 • 12 de junho</Text>
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
  top: {
    marginTop: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#4F6F52",
  },
  profile: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#D8E3D5",
    alignItems: "center",
    justifyContent: "center",
  },
  profileText: {
    color: "#4F6F52",
    fontWeight: "900",
    fontSize: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#1F2933",
    marginTop: 28,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 16,
    color: "#5F6B5B",
    marginTop: 10,
    lineHeight: 23,
  },
  searchBox: {
    marginTop: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 17,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#E6E8E3",
  },
  searchText: {
    color: "#8A8F8A",
    fontSize: 15,
  },
  quickActions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 18,
  },
  action: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E6E8E3",
  },
  actionIcon: {
    fontSize: 22,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#1F2933",
  },
  featureRow: {
    flexDirection: "row",
    gap: 14,
    marginTop: 18,
  },
  featureCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E6E8E3",
  },
  featureIcon: {
    fontSize: 24,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 17,
    fontWeight: "900",
    color: "#1F2933",
  },
  featureText: {
    fontSize: 13,
    color: "#5F6B5B",
    marginTop: 6,
    lineHeight: 18,
  },
  sectionHeader: {
    marginTop: 30,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#1F2933",
  },
  seeAll: {
    fontSize: 14,
    fontWeight: "900",
    color: "#4F6F52",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E6E8E3",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#1F2933",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#5F6B5B",
    marginBottom: 4,
  },
  statusBadge: {
    backgroundColor: "#4F6F52",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 99,
    alignSelf: "flex-start",
  },
  statusText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
  },
  statusBadgeLight: {
    backgroundColor: "#D8E3D5",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 99,
    alignSelf: "flex-start",
  },
  statusTextDark: {
    color: "#4F6F52",
    fontSize: 12,
    fontWeight: "900",
  },
  impactCard: {
    backgroundColor: "#4F6F52",
    borderRadius: 28,
    padding: 24,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  impactLabel: {
    color: "#EAF1E7",
    fontSize: 15,
    fontWeight: "700",
  },
  impactNumber: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "900",
    marginTop: 6,
  },
  impactText: {
    color: "#EAF1E7",
    fontSize: 15,
  },
  impactCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FAFAF8",
    alignItems: "center",
    justifyContent: "center",
  },
  impactCircleText: {
    fontSize: 32,
  },
  lastCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    padding: 22,
    marginTop: 18,
    marginBottom: 42,
    borderWidth: 1,
    borderColor: "#E6E8E3",
  },
  lastTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#1F2933",
  },
  lastText: {
    fontSize: 16,
    color: "#3F463F",
    fontWeight: "800",
    marginTop: 10,
  },
  lastSmall: {
    fontSize: 14,
    color: "#5F6B5B",
    marginTop: 6,
  },
});
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MapaScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Mapa</Text>
      <Text style={styles.subtitle}>
        Encontre pontos de recarga próximos considerando disponibilidade, segurança e sustentabilidade.
      </Text>

      <View style={styles.filters}>
        <Text style={styles.filterActive}>Próximos</Text>
        <Text style={styles.filter}>24h</Text>
        <Text style={styles.filter}>Família</Text>
        <Text style={styles.filter}>Seguro</Text>
        <Text style={styles.filter}>Hospital</Text>
        <Text style={styles.filter}>Solar</Text>
      </View>

      <View style={styles.map}>
        <View style={styles.roadOne} />
        <View style={styles.roadTwo} />
        <View style={styles.roadThree} />

        <TouchableOpacity
          style={[styles.pin, styles.pinOne]}
          onPress={() => router.push("/carregador/1")}
        >
          <Text style={styles.pinText}>⚡</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pin, styles.pinTwo]}
          onPress={() => router.push("/carregador/2")}
        >
          <Text style={styles.pinText}>⚡</Text>
        </TouchableOpacity>

        <View style={[styles.pinSmall, styles.pinThree]}>
          <Text style={styles.pinSmallText}>⚡</Text>
        </View>

        <View style={styles.mapOverlay}>
          <Text style={styles.mapLabel}>Mapa simulado</Text>
          <Text style={styles.mapInfo}>3 carregadores encontrados</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Estações próximas</Text>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/carregador/1")}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Eco Park Station</Text>
          <Text style={styles.text}>1,2 km • 3 de 4 vagas livres</Text>
          <Text style={styles.green}>85% energia solar</Text>
          <Text style={styles.mini}>Fraldário • Base policial • Vaga acessível</Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/carregador/2")}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Solar Charge Hub</Text>
          <Text style={styles.text}>2,4 km • 1 de 2 vagas livres</Text>
          <Text style={styles.green}>Energia renovável mista</Text>
          <Text style={styles.mini}>Delegacia • Hospital • Farmácia</Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Como ler o mapa?</Text>
        <Text style={styles.infoText}>
          Os pontos simulados destacam recarga elétrica, serviços próximos, segurança, acessibilidade e energia renovável.
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
  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 22,
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
  map: {
    height: 280,
    backgroundColor: "#D8E3D5",
    borderRadius: 32,
    marginTop: 24,
    overflow: "hidden",
    position: "relative",
  },
  roadOne: {
    position: "absolute",
    width: 400,
    height: 36,
    backgroundColor: "#FAFAF8",
    top: 100,
    left: -45,
    transform: [{ rotate: "-18deg" }],
  },
  roadTwo: {
    position: "absolute",
    width: 340,
    height: 30,
    backgroundColor: "#FAFAF8",
    top: 175,
    left: 20,
    transform: [{ rotate: "24deg" }],
  },
  roadThree: {
    position: "absolute",
    width: 260,
    height: 24,
    backgroundColor: "#EEF3EC",
    top: 60,
    right: -80,
    transform: [{ rotate: "38deg" }],
  },
  pin: {
    position: "absolute",
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#4F6F52",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#FAFAF8",
  },
  pinSmall: {
    position: "absolute",
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#739072",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FAFAF8",
  },
  pinOne: {
    top: 66,
    left: 58,
  },
  pinTwo: {
    top: 138,
    right: 62,
  },
  pinThree: {
    bottom: 44,
    left: 126,
  },
  pinText: {
    color: "#FFFFFF",
    fontSize: 21,
  },
  pinSmallText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  mapOverlay: {
    position: "absolute",
    left: 20,
    bottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  mapLabel: {
    color: "#1F2933",
    fontWeight: "900",
    fontSize: 15,
  },
  mapInfo: {
    color: "#5F6B5B",
    fontSize: 13,
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
    fontSize: 15,
    color: "#4F6F52",
    fontWeight: "900",
    marginTop: 8,
  },
  mini: {
    fontSize: 13,
    color: "#8A8F8A",
    marginTop: 8,
    maxWidth: 260,
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

import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import SearchBar from "./SearchBar";

function NavBar() {
  const pathname = usePathname();

  return (
    <View style={styles.navbar}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: "/logo.png" }}
          style={styles.logoImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.navLinks}>
        <Link
          href="/"
          style={[styles.link, pathname === "/" && styles.activeLink]}
        >
          Map
        </Link>
        <Link
          href="/readme"
          style={[styles.link, pathname === "/readme" && styles.activeLink]}
        >
          Readme
        </Link>
      </View>

      <View style={styles.searchSection}>
        <SearchBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create<{
  navbar: ViewStyle;
  logoContainer: ViewStyle;
  logoImage: ImageStyle;
  navLinks: ViewStyle;
  link: TextStyle;
  activeLink: TextStyle;
  searchSection: ViewStyle;
}>({
  navbar: {
    backgroundColor: "#2eaf4a",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    marginRight: 20,
  },
  logoImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  navLinks: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    color: "white",
    fontWeight: "400",
    marginRight: 20,
    fontSize: 16,
  },
  activeLink: {
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default NavBar;

import { Stack } from 'expo-router';
import NavBar from '../components/NavBar';

export default function Layout() {
  return (
    <>
      <NavBar />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

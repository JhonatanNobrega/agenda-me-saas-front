<template>
  <VContainer>
    Dashboard
    <VBtn @click="logout">Logout</VBtn>
    <pre>
      {{meStore.user}}
    </pre>
  </VContainer>
</template>

<script setup>
import { useAuth } from '@/store/auth';
import { useMe } from '@/store/me';
import { useRouter } from 'vue-router';
const authStore = useAuth();
const router = useRouter();
const meStore = useMe();
function logout() {
  authStore.logout().then(() => {
    router.push({ name: 'login' });
  });
}
</script>

<script setup lang="ts">
import CancellBtn from '../Buttons/CancellBtn.vue';
import ConfirmBtn from '../Buttons/ConfirmBtn.vue';

const emit = defineEmits<{
    (e: "cancel"): void
    (e: "confirm"): void
}>();


</script>

<template>
    <div class="rounded-lg pt-6 pb-6 w-96">
        <p class="text-white">Êtes-vous sûr de vouloir supprimer cet élément ?</p>
        <div class="mt-4 flex justify-end space-x-2">
            <CancellBtn @click="$emit('cancel')">Annuler</CancellBtn>
            <ConfirmBtn @click="$emit('confirm')">Confirmer</ConfirmBtn>
        </div>
    </div>
</template>
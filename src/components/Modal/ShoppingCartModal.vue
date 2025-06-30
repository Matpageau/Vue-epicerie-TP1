<script setup lang="ts">
import CartCard from '../Card/CartCard.vue';


</script>

<template>
  <div class="flex flex-col mb-5 px-15">
    <h1 class="text-white font-bold text-xl mb-7">Panier</h1>
    <div class="flex">
      <div class="w-3/5">
        <CartCard>
          
        </CartCard>
      </div>
      <div class="bg-[var(--seaBlue)] ml-5 p-5 rounded-md w-2/5">
        <div class="border-b-1 border-neutral-400 pb-5">
          <label for="stock" class="block text-white mt-2">Nom</label>
          <input 
            id="nom"
            name="nom"
            type="text"
            class="bg-neutral-300 rounded w-full p-1 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <label for="stock" class="block text-white mt-2">E-mail</label>
          <input 
            id="email"
            name="email"
            type="email"
            class="bg-neutral-300 rounded w-full p-1 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <label for="stock" class="block text-white mt-2">Numéro de téléphone</label>
          <input 
            id="tel"
            name="tel"
            type="tel"
            class="bg-neutral-300 rounded w-full p-1 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <label for="stock" class="block text-white mt-2">Adresse</label>
          <input 
            id="adrs"
            name="adrs"
            type="text"
            class="bg-neutral-300 rounded w-full p-1 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <div>
          <label for="stock" class="block text-white mt-2">Numéro de carte</label>
          <input 
            id="card"
            name="card"
            type="text"
            class="bg-neutral-300 rounded w-full p-1 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <div class="flex w-full gap-x-2">
            <div class="w-1/2">
              <label for="exp" class="block text-white mt-2">Date exp.</label>
              <input 
                id="exp"
                name="exp"
                type="text"
                class="bg-neutral-300 rounded w-full p-1 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div class="w-1/2">
              <label for="cvc" class="block text-white mt-2">CVC</label>
              <input 
                id="cvc"
                name="cvc"
                type="text"
                class="bg-neutral-300 rounded w-full p-1 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-5">
          <button class="bg-[var(--green)] py-3 px-7 rounded-2xl cursor-pointer font-bold">Payer</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
    import {useStore} from '../stores/index';
    const store = useStore();
    store.getData();
</script>

<template>
    <div v-for="currency in store.currencies" :key="currency.currencyCodeA" class="table">
      <div class='currency'>
        <h5>{{currency.firstCurrency}} /
            {{currency.secondCurrency}}</h5>
      </div>
      <div class='price'>
        <h5>Buy: {{currency.rateBuy}}</h5>
        <h5>Sell: {{currency.rateSell}}</h5>
      </div>
    </div>    
</template>

<style>
    .table {
        margin-top: 3px;
        padding: 5px;
    }
    .price {
        display: flex;
        justify-content: space-evenly;
    }
</style>
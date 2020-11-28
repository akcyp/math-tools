<template>
  <div>
    <highlightjs :class="contentClass" language='javascript' :code="displayCode" />
    <q-tooltip content-class="bg-dark text-white tooltipCode" anchor="top middle">
      {{ code }}
    </q-tooltip>
  </div>
</template>

<script lang="ts">
import { DefaultStorageListItem } from 'src/store/module-storage/state';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class CodeDisplay extends Vue {
  @Prop({ type: Number, default: Infinity }) readonly maxLength!: number;
  @Prop({ default: '' }) readonly item!: DefaultStorageListItem;
  @Prop({ type: String, default: '' }) readonly contentClass!: string;
  public code: string = JSON.stringify(this.item);
  public displayCode: string = this.code.length > this.maxLength ? this.code.slice(0, this.maxLength - 3) + '...' : this.code;
}
</script>

<style lang="scss">
.tooltipCode {
  padding: 1em;
  font-size: 12px;
}
</style>

<template>
  <ToggleButtonContainer
    square-image-button
    :buttons="buttons"
    :button-width="100"
    title="Select Hero Package Skin"
    class="distributer-selection"
    @select="onSelect"
  />
</template>

<script>
import ToggleButtonContainer from './ToggleButtonContainer';
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
  components: {
    ToggleButtonContainer,
  },
  data() {
    return {
      buttons: [
        {
          distributerName: 'amazon',
          imageFilename: 'distributer-amazon.png',
          value: false,
        },
        {
          distributerName: 'fedex',
          imageFilename: 'distributer-fedex.png',
          value: false,
        },
        {
          distributerName: 'ups',
          imageFilename: 'distributer-ups.png',
          value: false,
        },
        {
          distributerName: 'dhl',
          imageFilename: 'distributer-dhl.png',
          value: false,
        },
        {
          distributerName: 'usps',
          imageFilename: 'distributer-usps.png',
          value: false,
        },
      ],
    };
  },
  computed: {
    ...mapState(['inStorySelectedDistributer']),
  },
  created() {
    console.log('distributer', this.inStorySelectedDistributer);
    switch (this.inStorySelectedDistributer) {
      case 'amazon':
        this.buttons[0].value = true;
        break;
      case 'fedex':
        this.buttons[1].value = true;
        break;
      case 'ups':
        this.buttons[2].value = true;
        break;
      case 'dhl':
        this.buttons[3].value = true;
        break;
      case 'usps':
        this.buttons[4].value = true;
        break;
    }
  },
  methods: {
    ...mapMutations(['updateInStorySelectedDistributer']),
    ...mapActions(['setDistributer']),
    onSelect({button, index}) {
      const targetButton = this.buttons[index];
      if (targetButton.value) return;
      for (const b of this.buttons) {
        b.value = false;
      }

      const distributerName = targetButton.distributerName;
      this.setDistributer(distributerName)
          .then(() => {
            targetButton.value = true;
            this.updateInStorySelectedDistributer(distributerName);
          })
          .catch(console.error);
    },
  },
};
</script>

<style scoped lang="stylus">
</style>

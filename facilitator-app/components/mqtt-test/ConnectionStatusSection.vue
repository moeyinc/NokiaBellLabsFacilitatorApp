<template>
  <section>
    <h3>MQTT Connection Status</h3>
    <ul>
      <li>
        Connected:
        <span
          v-if="mqttClient && mqttClient.connected"
          class="normal"
        >
          true
        </span>
        <span
          v-else
          class="error"
        >
          false
        </span>
      </li>
      <li>
        Broker URL:
        <span class="normal">{{ brokerUrl }}</span>
      </li>
      <li>
        Topic:
        <span class="normal">{{ topic }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import CONFIG from '@/config';

export default {
  props: {
    mqttClient: {
      type: Object,
      default: null,
    },
  },
  computed: {
    brokerUrl() {
      if (this.mqttClient && this.mqttClient.options) {
        const host = this.mqttClient.options.host;
        const port = this.mqttClient.options.port;
        const path = this.mqttClient.options.path;
        return host + ':' + port + path;
      }
      return '';
    },
    topic() {
      const topic = process.env.MQTT_TOPIC || CONFIG.MQTT.TOPIC;
      return this.brokerUrl ? topic : '';
    },
  },
};
</script>

<style scoped lang="stylus">
section
  border: solid 1px lightgrey
  padding: 5px
  background-color: ghostwhite
  h3
    font-size: 16px
    font-family: 'NokiaPureHeadline_Regular'
    margin-bottom: 8px
  ul
    list-style: disc inside
    li
      padding: 5px 0 5px 5px
      .normal
        color: green
      .error
        color: red
</style>

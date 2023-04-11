import mitt, { Emitter } from 'mitt';

const eventBus: Emitter = mitt();

export default eventBus;
let instance = null;
import BaseLayout from "./BaseLayout";
export default class QuickenData {
    isListenerSetAlready: boolean = false;
    title: String = "";
    object: BaseLayout = null;
    array:[];
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    static getInstance() {
        return !instance ? (new QuickenData()) : instance;
    }
}
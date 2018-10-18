export const lengthMixin = {
    computed: {
        count() {
            return this.data2 + '(' + this.data2.length + ')';
        }
    }
};
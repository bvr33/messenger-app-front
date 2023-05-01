<script setup lang="ts">

//
defineProps<{
    msgOwner: boolean
}>()

</script>

<template>
    <span class="message-wrap" :class="`msg-${msgOwner ? 'you' : 'stranger'}`">
        <span class="message">
            <slot />
        </span>
    </span>
</template>

<style lang="scss" scoped>
.message-wrap {
    display: flex;
    width: 100%;
    gap: 5px;
    height: max-content;

    .message {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        padding: 10px;
        background-color: $color-secondary;
        color: $color-white;
        border-radius: $border-radius;
        width: max-content;
    }

    &.msg-stranger {
        .message {
            border-radius: $border-radius $border-radius $border-radius 0;
        }
    }

    &.msg-you {
        flex-direction: row-reverse;

        .message {
            border-radius: $border-radius $border-radius 0 $border-radius;
        }
    }
}
</style>

<script setup lang="ts">
import ProgressBar from "@/package/toast/components/Progress.vue";
import Timer from "@/package/toast/components/Timer.vue";
import XIcon from "@/package/toast/components/X.vue";
import type { IToast } from "../types/toast";
import { computed } from "vue";

const props = defineProps<{
    toast: IToast;
}>();
const emit = defineEmits<{
    "delete-toast": [id: number];
}>();
const isDark = computed(() => {
    if (props.toast.theme) return props.toast.theme === "dark";
    return true;
});
</script>

<template>
    <div class="b-toast__alert" :class="`theme-${toast.type} ${isDark ? 'dark' : ''}`">
        <Timer style="display: none" :timer="toast.duration" :id="toast.id"
            @close-toast="(e) => emit('delete-toast', e)" />
        <div class="b-toast__text">
            <h4 class="b-toast__title" v-if="toast.title" :class="`color-${toast.type}`">
                {{ toast.title }}
            </h4>
            <h4 class="b-toast__content">{{ toast.content }}</h4>
        </div>
        <a @click="emit('delete-toast', toast.id)" class="b-toast__close">
            <XIcon :dark="isDark" />
        </a>
        <ProgressBar :class="`bg-${toast.type}`" :duration="toast.duration" />
    </div>
</template>

<style scoped lang="scss">
.b-toast {
    &__alert {
        position: relative;
        transition: all 750ms ease-in-out;
        margin-bottom: 20px;
        border-radius: 5px;
        padding: 18px 28px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #e5e6e8;
        color: black;

        &.dark {
            background-color: #252831;
            color: white;
        }
    }

    &__close {
        cursor: pointer;
        height: 24px;
        margin-left: 8px;
    }

    &__text {
        display: flex;
    }

    &__title {
        margin-right: 8px;
    }

    &__content {
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: 400;
    }
}

@mixin alert($name, $bgColor) {
    .theme-#{$name} {
        border: 2px solid $bgColor;
    }

    .color-#{$name} {
        color: #{$bgColor};
    }

    .bg-#{$name} {
        background: #{$bgColor};
    }
}

@include alert(success, #00f391);
@include alert(error, #fe5050);
@include alert(warning, #ff8a00);
@include alert(info, #5093fe);

.b-toast__progress {
    position: absolute;
    width: 100%;
    height: 6px;
    left: 0;
    bottom: 0;
    border-radius: 0px 0px 0px 6px;
}

@media (max-width: 800px) {
    .b-toast {
        &__alert {
            margin-bottom: 10px;
        }
    }
}
</style>

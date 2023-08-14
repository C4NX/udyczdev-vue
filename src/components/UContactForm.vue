<template>
    <form class="flex flex-col p-5 gap-5 bg-base-100 w-2/3 rounded-box" @submit.prevent="() => mailTo(mail)">
        <h3 class="text-2xl">Contact me</h3>
        <div class="form-control">
            <label class="input-group">
                <span>Subject</span>
                <input type="text" class="input input-bordered w-full" placeholder="Question about..." v-model="subject" />
            </label>
        </div>
        <div class="form-control">
            <textarea class="textarea textarea-primary" placeholder="Your message..." v-model="message"></textarea>
        </div>
        <button class="btn btn-primary" type="submit">Send (via mail)</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('')
const subject = ref('')

const mailTo = (email: string) => {
    if(!message.value || !subject.value) {
        return alert('Please fill all fields')
    }
    window.open(`mailto:${email}?subject=${subject.value}&body=${message.value}`)
}

defineProps({
    mail: {
        type: String,
        required: true
    }
})

</script>
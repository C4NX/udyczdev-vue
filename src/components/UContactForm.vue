<script setup lang="ts">
import { OhVueIcon } from 'oh-vue-icons';
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { MailSendLine } from '../config/icons'

const message = ref('')
const subject = ref('')
const modalElement = ref<HTMLDialogElement | undefined>()

const { t } = useI18n()

const mailTo = (email: string) => {
  if (!message.value || !subject.value) {
    if (modalElement.value) {
      modalElement.value.showModal()
    }
    return
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

<template>
  <dialog class="modal modal-bottom sm:modal-middle" ref="modalElement">
    <form method="dialog" class="modal-box">
      <h3 class="text-lg font-bold">{{ $t('contact.error.title') }}</h3>
      <p class="py-4">{{ $t('contact.error.message') }}</p>
      <div class="modal-action">
        <button class="btn">Close</button>
      </div>
    </form>
  </dialog>
  <form class="flex flex-col p-5 gap-5 bg-base-100 w-full mx-5 sm:mx-10 rounded-box" @submit.prevent="() => mailTo(mail)">
    <h3 class="text-2xl font-bold">{{ $t('contact.title') }}</h3>
    <p>{{ $t('contact.text') }}</p>
    <div class="form-control">
      <label class="input-group">
        <span>{{ $t('contact.subject') }}</span>
        <input type="text" class="input input-bordered w-full" :placeholder="$t('contact.placeholder.subject')"
          v-model="subject" />
      </label>
    </div>
    <div class="form-control">
      <textarea class="textarea textarea-primary" :placeholder="$t('contact.placeholder.message')"
        v-model="message"></textarea>
    </div>
    <button class="btn btn-primary" type="submit">
      {{ $t('contact.send') }}
      <OhVueIcon :name="MailSendLine.name" fill="currentColor" />
    </button>
  </form>
</template>
<template>
  <component :is="blockTypeMap[props.data.blockCode]" :data="translate" />
</template>

<script setup>
import { computed, defineProps } from 'vue'

// import Menu from './Menu.vue'
import Menu from '@/views/children/Menu.vue'
import Banner from './Banner.vue'
import PlayList from './PlayList.vue'
const blockTypeMap = {
  HOMEPAGE_BANNER: Banner,
  HOMEPAGE_BLOCK_OLD_DRAGON_BALL: Menu,
  HOMEPAGE_BLOCK_PLAYLIST_RCMD: PlayList,
  HOMEPAGE_BLOCK_STYLE_RCMD: '',
  HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG: '',
  HOMEPAGE_BLOCK_HOT_TOPIC: '',
  HOMEPAGE_MUSIC_CALENDAR: '',
  HOMEPAGE_MUSIC_MLOG: '',
  HOMEPAGE_BLOCK_MGC_PLAYLIST: '',
  HOMEPAGE_BLOCK_OFFICIAL_PLAYLIST: '',
  HOMEPAGE_VOICELIST_RCMD: '',
  HOMEPAGE_PODCAST24: '',
  HOMEPAGE_BLOCK_YUNCUN_PRODUCED: '',
  HOMEPAGE_BLOCK_VIDEO_PLAYLIST: '',
  HOMEPAGE_BLOCK_NEW_HOT_COMMENT: '',
  HOMEPAGE_VOICEBOOK_RCMD: ''
}

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const translate = computed(() => {
  switch (props.data.blockCode) {
    case 'HOMEPAGE_BLOCK_OLD_DRAGON_BALL':
      return props.data.creatives[0].resources.map((item) => {
        return {
          name: item.uiElement.mainTitle.title,
          img: item.uiElement.image.imageUrl
        }
      })

    case 'HOMEPAGE_BANNER':
      console.log(props.data.extInfo.banners)

      return props.data.extInfo.banners.map((item) => {
        return {
          img: item.pic
        }
      })
    case 'HOMEPAGE_BLOCK_PLAYLIST_RCMD':
      console.log(props.data.creatives)
      return {
        name: props.data.uiElement.subTitle.title,
        children: props.data.creatives.map((item) => {
          return {
            id: item.resources[0].resourceId,
            playCount: item.resources[0].resourceExtInfo.playCount,
            imageUrl: item.resources[0].uiElement.image.imageUrl,
            title: item.resources[0].uiElement.mainTitle.title
          }
        })
      }
    default:
      return []
  }
})
</script>

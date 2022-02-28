<style scoped lang="scss">

</style>

<template>

  <site-page>

    <el-tooltip class="box-item"
                effect="light"
                content="Top Right prompts info"
    >
      <el-button type="text" @click="centerDialogVisible = true">
        Click to open the Dialog
      </el-button>
    </el-tooltip>

    <el-dialog v-model="centerDialogVisible"
               title="now"
               center
               draggable
               custom-class="w-320px lg:w-500px p-5 shadow-md"
    >

      <div class="text-xl font-light text-center">

      </div>

      <template #footer>

        <div class="dialog-footer">

            <el-popconfirm confirm-button-text="Yes"
                           cancel-button-text="No"
                           title="Are you sure to delete this?"
                           @confirm="centerDialogVisible = false"
            >
              <template #reference>

                  <el-button>
                <el-tooltip class="box-item"
                            effect="dark"
                            content="All changes will be lost"
                >
                    <span>Cancel</span>
                </el-tooltip>
                  </el-button>

              </template>
            </el-popconfirm>

          <el-button type="primary" @click="centerDialogVisible = false" @mouseenter="open2">
            Confirm
          </el-button>

        </div>

      </template>

    </el-dialog>

  </site-page>

</template>

<script>

  import { ref }            from 'vue'
  import { useNow }         from '@vueuse/core'
  import { ElNotification } from 'element-plus'

  import SitePage from '@components/page/site-page.vue'

  export default {
    name:       'main.view',
    components: { SitePage },
    setup() {

      const centerDialogVisible = ref( false )
      const { now, pause, resume } = useNow( { controls: true } )

      const open2 = () => {
        ElNotification( {
          title:    'Prompt',
          message:  now,
          duration: 3000,
          type:     'success'
        } )

      }

      return {
        centerDialogVisible,
        now,
        open2
      }
    }
  }
</script>

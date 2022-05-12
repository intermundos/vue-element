import 'element-plus/es/components/notification/style/index'
import { NotificationOptions } from 'element-plus/es/components/notification'
import { ElNotification }      from 'element-plus'

export function notify( options: Partial<NotificationOptions> ): void {
  ElNotification( options )
}
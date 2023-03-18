import Clipboard from 'clipboard'
import { SendSuccessMessage,SendErrorMessage } from "../utils/message";
/**
 * @description 复制数据
 * @param text
 * @param event
 */
export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  })
  clipboard.on('success', () => {
    SendSuccessMessage("复制成功")
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    SendErrorMessage("该浏览器不支持自动复制")
    clipboard.destroy()
  })
  clipboard.onClick(event)
}


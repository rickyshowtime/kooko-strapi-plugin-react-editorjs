import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import Code from '@editorjs/code'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import ColorPlugin from "editorjs-text-color-plugin"
import LinkTool from '@editorjs/link'
import Marker from '@editorjs/marker'
import InlineCode from '@editorjs/inline-code'
import ToggleBlock from 'editorjs-toggle-block';
import Alert from 'editorjs-alert';

const customTools = {
  embed: Embed,
  table: {
    class: Table,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  Color: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      colorCollections: ['#009f79','#e0e7e5','#809d94','#003b29','#00190f', '#32324d', '#ffffff', '#000000'],
      defaultColor: '#32324d',
      type: 'text',
    }
  },
  code: Code,
  LinkTool: {
    class: LinkTool,
    config: {
      endpoint: `/api/editorjs/link`,
    },
  },
  raw: {
    class: Raw,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: 'Quote',
      captionPlaceholder: 'Quote`s author',
    },
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  delimiter: Delimiter,
  inlineCode: InlineCode,
}
export default customTools

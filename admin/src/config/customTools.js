import PluginId from '../pluginId'
import EditorJS from 'react-editor-js';
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import ColorPlugin from "editorjs-text-color-plugin"
import AttachesTool from '@editorjs/attaches';
import editorjsColumns from '@calumk/editorjs-columns';
import ToggleBlock from 'editorjs-toggle-block';
import Carousel from 'editorjs-carousel';
import Alert from 'editorjs-alert';

const customTools = {
  embed: Embed,
  table: {
    class: Table,
    inlineToolbar: true,
  },
  attaches: {
    class: AttachesTool,
    config: {
      endpoint: 'localhost:1337/api/upload'
    }
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  code: Code,
  LinkTool: {
    class: LinkTool,
    config: {
      endpoint: `/api/link`,
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
  Color: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      colorCollections: ['#009f79','#e0e7e5','#809d94','#003b29','#00190f', '#32324d', '#ffffff', '#000000'],
      defaultColor: '#32324d',
      type: 'text',
    }
  },
  Marker: {
    class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
    config: {
      defaultColor: '#FFBF00',
      type: 'marker',
    }
  },
  delimiter: Delimiter,
  inlineCode: InlineCode,
  toggle: {
    class: ToggleBlock,
    inlineToolbar: true,
  },
  carousel: {
    class: Carousel,
    config: {
      endpoints: {
        byFile: "localhost:1337/api/upload",
      }
    }
  },
  alert: Alert,
}

const column_tools = {
  ...customTools
}

const tools = {
  ...customTools,
  columns : {
    class : editorjsColumns,
    EditorJsLibrary : EditorJS, // Pass the library instance to the columns instance.
    config : {
      tools : column_tools, // IMPORTANT! ref the column_tools
    }
  },
}

export default tools

// import * as AppActions from "../../reducers/app"
// // import * as Actions from "../../reducers/buffer"
import actions from "../../actionCreators"

// commitAll: actions.git.commitAll,
// saveFile: actions.buffer.saveFile

type MousetrapExpr = string | string[]

export enum ImplCommandList {
  setLayoutMode1 = "setLayoutMode1",
  setLayoutMode2 = "setLayoutMode2",
  setLayoutMode3 = "setLayoutMode3",
  saveCurrentFile = "saveCurrentFile",
  commitAll = "commitAll"
}

export const implCommandMap: {
  [commandName in ImplCommandList]: (dispatch: any, ev: Event) => void
} = {
  [ImplCommandList.setLayoutMode1]: dispatch => {
    dispatch(
      actions.app.setLayoutAreas({ areas: [["menu", "editor", "support"]] })
    )
  },
  [ImplCommandList.setLayoutMode2]: dispatch => {
    dispatch(
      actions.app.setLayoutAreas({ areas: [["menu", "editor", "editor"]] })
    )
  },
  [ImplCommandList.setLayoutMode3]: dispatch => {
    dispatch(
      actions.app.setLayoutAreas({ areas: [["editor", "editor", "editor"]] })
    )
  },
  [ImplCommandList.saveCurrentFile]: (dispatch, event) => {
    event.preventDefault()
    dispatch(actions.buffer.saveFile({}))
  },
  [ImplCommandList.commitAll]: (dispatch, event) => {
    dispatch(actions.git.commitAll({ message: "Update" }))
  }
}

export const defaultKeyMap: {
  [commandName in ImplCommandList]: MousetrapExpr | null
} = {
  [ImplCommandList.setLayoutMode1]: "ctrl+1",
  [ImplCommandList.setLayoutMode2]: "ctrl+2",
  [ImplCommandList.setLayoutMode3]: "ctrl+3",
  [ImplCommandList.saveCurrentFile]: "command+s",
  [ImplCommandList.commitAll]: "command+shift+s"
}

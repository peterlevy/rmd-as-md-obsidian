import { Plugin } from 'obsidian';

export default class QmdAsMdPlugin extends Plugin {

  async onload() {
    super.onload();

    // register the view and extensions
    this.registerExtensions(["qmd"], "markdown");
  }
}

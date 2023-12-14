import {Document, Paragraph} from 'docx'
import { FileChild } from 'docx/build/file/file-child';

export default class Contrato{ 
  create(paragrafos: FileChild[]){
    const doc = new Document({
    sections: [{
      children:paragrafos
    }],
    
  });
  return doc
  }
}
  
  
  
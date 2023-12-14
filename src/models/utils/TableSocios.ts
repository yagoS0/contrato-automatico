import {Paragraph, TextRun, TableRow, TableCell, VerticalAlign, WidthType, AlignmentType} from 'docx'
import {data} from '../../tests/data_test'


export class TableSocios{
   headerTabela(){
    const cabecalho = new TableRow({
      
      tableHeader: true,
        children: [
          new TableCell({
            width: {
              size: 40,
              type: WidthType.PERCENTAGE,
             },
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({
              alignment: AlignmentType.CENTER,
                children:[
                  new TextRun({
                    text: 'Sócio',
                    font: {
                      name: 'Arial'
                    },
                    size: 24,
                  })
                ]
              
                })],
             
          }),
          new TableCell({
            width: {
              size: 30,
              type: WidthType.PERCENTAGE,
             },
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({
              alignment: AlignmentType.CENTER,
              children:[
                new TextRun({
                  text: 'N° de Quotas',
                  font: {
                    name: 'Arial'
                  },
                  size: 24,
                })
              ]
            
              })],
           
          }),
          new TableCell({
            width: {
              size: 10,
              type: WidthType.PERCENTAGE,
             },
            verticalAlign: VerticalAlign.CENTER,      
            children: [new Paragraph({
              alignment: AlignmentType.CENTER,
              children:[
                new TextRun({
                  text: '%',
                  font: {
                    name: 'Arial'
                  },
                  size: 24,
                })
              ]
            
              })],
          }),
          new TableCell({
            width: {
              size: 20,
              type: WidthType.PERCENTAGE,
             },
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({
              alignment: AlignmentType.CENTER,
              children:[
                new TextRun({
                  text: 'Valor R$',
                  font: {
                    name: 'Arial'
                  },
                  size: 24,
                })
              ]
            
              })],
            
          }),
        ],
    })
  
    return cabecalho
  
  }

  sociosTabela (){
    const socio =  new TableRow({
       tableHeader: true,
         children: [
           new TableCell({
             width: {
               size: 40,
               type: WidthType.PERCENTAGE,
              },
             verticalAlign: VerticalAlign.CENTER,
             children: [new Paragraph({
              alignment: AlignmentType.CENTER,
                 children:[
                   new TextRun({
                     text: data.dadosSocio.nome,
                     font: {
                       name: 'Arial'
                     },
                     size: 24,
                   })
                 ]
               
                 })],
              
           }),
           new TableCell({
             width: {
               size: 30,
               type: WidthType.PERCENTAGE,
              },
             verticalAlign: VerticalAlign.CENTER,
             children: [new Paragraph({
              alignment: AlignmentType.CENTER,
               children:[
                 new TextRun({
                   text: data.capitalSocial.numeroQuotas,
                   font: {
                     name: 'Arial'
                   },
                   size: 24,
                 })
               ]
             
               })],
            
           }),
           new TableCell({
             width: {
               size: 10,
               type: WidthType.PERCENTAGE,
              },
             verticalAlign: VerticalAlign.CENTER,      
             children: [new Paragraph({
              alignment: AlignmentType.CENTER,
               children:[
                 new TextRun({
                   text: data.capitalSocial.porcentagemSocio,
                   font: {
                     name: 'Arial'
                   },
                   size: 24,
                 })
               ]
             
               })],
           }),
           new TableCell({
             width: {
               size: 20,
               type: WidthType.PERCENTAGE,
              },
             verticalAlign: VerticalAlign.CENTER,
             children: [new Paragraph({
              alignment: AlignmentType.CENTER,
               children:[
                 new TextRun({
                   text: data.capitalSocial.valor,
                   font: {
                     name: 'Arial'
                   },
                   size: 24,
                 })
               ]
             
               })],
             
           }),
         ],
     })
     return socio
  }

  footerTabela (){
    const footer =  new TableRow({
     tableHeader: true,
       children: [
         new TableCell({
           width: {
             size: 40,
             type: WidthType.PERCENTAGE,
            },
           verticalAlign: VerticalAlign.CENTER,
           children: [new Paragraph({
            alignment: AlignmentType.CENTER,
               children:[
                 new TextRun({
                   text: 'TOTAL',
                   font: {
                     name: 'Arial'
                   },
                   size: 24,
                 })
               ]
             
               })],
            
         }),
         new TableCell({
           width: {
             size: 30,
             type: WidthType.PERCENTAGE,
            },
           verticalAlign: VerticalAlign.CENTER,
           children: [new Paragraph({
            alignment: AlignmentType.CENTER,
             children:[
               new TextRun({
                 text: data.capitalSocial.numeroQuotas,
                 font: {
                   name: 'Arial'
                 },
                 size: 24,
               })
             ]
           
             })],
          
         }),
         new TableCell({
           width: {
             size: 10,
             type: WidthType.PERCENTAGE,
            },
           verticalAlign: VerticalAlign.CENTER,      
           children: [new Paragraph({
            alignment: AlignmentType.CENTER,
             children:[
               new TextRun({
                 text: data.capitalSocial.porcentagemSocio,
                 font: {
                   name: 'Arial'
                 },
                 size: 24,
               })
             ]
           
             })],
         }),
         new TableCell({
           width: {
             size: 20,
             type: WidthType.PERCENTAGE,
            },
           verticalAlign: VerticalAlign.CENTER,
           children: [new Paragraph({
             children:[
               new TextRun({
                 text: data.capitalSocial.valor,
                 font: {
                   name: 'Arial'
                 },
                 size: 24,
               })
             ],
             alignment: AlignmentType.CENTER,
             })],
         }),
       ],
     })
     return footer
   }
   
}
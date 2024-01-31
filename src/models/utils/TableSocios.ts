import {Paragraph, TextRun, TableRow, TableCell, VerticalAlign, WidthType, AlignmentType} from 'docx'
import IData from '../../services/Interface/IData'


class TableSocios{

  create(data){

    const rowsSocios: TableRow[] = []
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

    
    rowsSocios.push(cabecalho)
    data.dadosSocios.forEach(socio => {

      const sociosTabela =  new TableRow({
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
                      text: socio.nome,
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
                    text: `${(socio.porcentagemCapital/100) * (data.capitalSocial.quotas)}`,
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
                    text: `${socio.porcentagemCapital}`,
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
                    text: `${(socio.porcentagemCapital/100) * (data.capitalSocial.capital)},00`,
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
      rowsSocios.push(sociosTabela)
    })
  
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
                  text: data.capitalSocial.quotas.toString(),
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
                  text: '100%',
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
                  text: data.capitalSocial.capital.toString(),
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
    rowsSocios.push(footer)
    
    return rowsSocios
  }
}

export default TableSocios
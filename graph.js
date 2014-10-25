$(function(){ // on dom ready
  $('#cy').cytoscape({
    layout: {
      name: 'cose',
      padding: 10
    },
    style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'shape': 'ellipse',
          'width': 64,
          'height': 64,
          'content': 'data(name)',
          'text-valign': 'center',
          'text-outline-width': 2,
          'text-outline-color': 'green',
          'background-color': 'white',
          'color': '#000000'
        })
    .selector('edge').css({ content: 'data(name)' }) 
      .selector(':selected')
        .css({
          'border-width': 3,
          'border-color': '#333'
        })
      .selector('edge')
        .css({
          'opacity': 0.666,
          'width': 8,
          'target-arrow-shape': 'triangle',
          'source-arrow-shape': 'circle',
          'line-color': 'data(faveColor)',
          'source-arrow-color': 'data(faveColor)',
          'target-arrow-color': 'data(faveColor)'
        })
      .selector('edge.questionable')
        .css({
          'line-style': 'dotted',
          'target-arrow-shape': 'diamond'
        })
      .selector('.faded')
        .css({
          'opacity': 0.25,
          'text-opacity': 0
        }),
    elements: {
      nodes: [
        { data: { id: 'j', name: 'Jerry', weight: 65, faveColor: '#6FB1FC', faveShape: 'triangle' } },
        { data: { id: 'e', name: 'Elaine', weight: 45, faveColor: '#EDA1ED', faveShape: 'ellipse' } },
        { data: { id: 'k', name: 'Kramer', weight: 75, faveColor: '#86B342', faveShape: 'octagon' } },
        { data: { id: 'g', name: 'George', weight: 70, faveColor: '#F5A45D', faveShape: 'rectangle' } }
      ],
      edges: [
        { data: { source: 'j', target: 'e', faveColor: '#6FB1FC', strength: 90 , name:'likes'} },
        { data: { source: 'j', target: 'k', faveColor: '#6FB1FC', strength: 70 , name:'likes'} },
        { data: { source: 'j', target: 'g', faveColor: '#6FB1FC', strength: 80 , name:'likes'} },
        { data: { source: 'e', target: 'j', faveColor: '#EDA1ED', strength: 95 , name:'likes'} },
        { data: { source: 'e', target: 'k', faveColor: '#EDA1ED', strength: 60, name:'likes' }, classes: 'questionable' },
        { data: { source: 'k', target: 'j', faveColor: '#86B342', strength: 100, name:'likes' } },
        { data: { source: 'k', target: 'e', faveColor: '#86B342', strength: 100 , name:'likes'} },
        { data: { source: 'k', target: 'g', faveColor: '#86B342', strength: 100 , name:'likes'} },
        { data: { source: 'g', target: 'j', faveColor: '#F5A45D', strength: 90 , name:'likes'} }
      ]
    }, 
    ready: function(){
      window.cy = this;
    }
  });
}); 

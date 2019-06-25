process.on("message",  data => {
  for(let i = 0; i < data.id; i++){
   continue
  }
  process.exit(0)
})


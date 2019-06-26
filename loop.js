process.on("message",  data => {
  let count = 0
  for(let i = 0; i < data.id; i++){
    count++
  }
  process.exit(0)
})


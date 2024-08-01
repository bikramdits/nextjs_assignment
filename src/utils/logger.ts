import winston from 'winston';

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),  
    new winston.transports.File({      
      filename: 'logs/application.log', 
      level: 'info'                     
    })
  ],
});

export default logger;

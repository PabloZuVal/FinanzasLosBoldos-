import mongoose, {Schema} from 'mongoose';

const cuentaluzSchema = new Schema({
    // usuario:{},
    //ano:{},
    monto:{type:Number, required:true},
    fechaPago:{type: String, unique:false, required: true},
    mes:{type: String, maxlength:50, required: true},
    estado:{type: Number, default: 1},
    createdAt:{type: Date, default: Date.now}
});

const CuentaLuz = mongoose.model('cuentaluz', cuentaluzSchema);

export default CuentaLuz;
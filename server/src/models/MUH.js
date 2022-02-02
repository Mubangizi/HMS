module.exports = (sequelize,DataTypes)=>{
    const MUH = sequelize.define("MUH",{
        patientName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        sex:{
            type:DataTypes.STRING,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        },
        disease:{
            type:DataTypes.STRING,
            allowNull:false
        },
        },{
            timeStamps:false
        }         
    )

    return MUH
}
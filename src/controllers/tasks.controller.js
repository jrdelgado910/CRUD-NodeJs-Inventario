import Task from "../models/Task";

export const renderTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.render("index", { tasks: tasks });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (req, res) => {
  const task = Task(req.body);
  const taskSaved = await task.save();
  res.redirect("/");
};

export const renderEditTask = async (req, res) => {
    try {
        const tasks = await Task.findById(req.params.id).lean();
        res.render("edit",{ tasks });  
    } catch (error) {
       console.log(error.message) ;
    }
};

export const editTask=async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
};

export const deleteTask = async (req, res) => {
    const {id} = await Task.findOneAndDelete(id).lean();
    res.redirect('/');
};

export const editToggle =async (req, res)=>{
    const {id}=req.params;
    const task=await Task.findById(id);
    task.disponible=!task.disponible;
    await task.save();
    res.redirect('/');
};

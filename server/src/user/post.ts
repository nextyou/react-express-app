import User from "./schema";
export const saveUser = async (req: Request, res: Response) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    return res.json();
  } catch (error) {
    return {};
  }
};

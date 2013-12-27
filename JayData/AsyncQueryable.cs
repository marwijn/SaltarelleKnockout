﻿using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace JayDataApi
{
    public class AsyncQueryable<T> where T: Entity, new ()
    {
        public AsyncQueryable(object jayDataObject)
        {
            JayDataObject = jayDataObject;
        }

        protected dynamic JayDataObject
        {
            [InlineCode("{this}.jayDataObject")]
            get { return null; }
            [InlineCode("{this}.jayDataObject={value}")]
            set { }
        }

        public Task<IList<T>> ToList()
        {
            var jayDataTask = Task.FromDoneCallback<IList<object>>((object) JayDataObject, "toArray");
            return jayDataTask.ContinueWith(task =>
            {
                IList<T> list = new List<T>();
                foreach (var obj in task.Result)
                {
                    list.Add(Entity.Create<T>(obj));
                }
                return list;
            });
        }

        [InlineCode("{this}.jayDataObject.filter({func})")]
        public void Where(Func<T, bool> func)
        {
        }
    }
}
